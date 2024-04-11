import os
import xml.etree.ElementTree as ET
import csv
import json


def read_file(input_file):
    with open(input_file, "r") as f:
        lines = f.readlines()
    return lines


def categorize(lines):
    customers = []
    products = []
    orders = []
    order_lines = []
    for line in lines:
        data = line.split(",")[0]
        data_type = data.strip('"')
        if data_type == "customer":
            customers.append(line)
        elif data_type == "product":
            products.append(line)
        elif data_type == "order":
            orders.append(line)
            order_lines.append([])
        else:
            order_lines[-1].append(line)
    return customers, products, orders, order_lines


def parse_customer(record):
    record = record.split(",")
    customer_id = record[1].strip('"')
    name = record[2].strip('"')
    email = record[3].strip('"')
    age = int(record[4].strip()) if record[4].strip() else None
    gender = "male" if record[5].strip() == "1" else "female"
    return {
        "customer_id": customer_id,
        "name": name,
        "email": email,
        "age": age,
        "gender": gender,
    }


def customer_xml(customers):
    root = ET.Element("customers")
    for customer in customers:
        customer_elem = ET.SubElement(root, "customer")
        for key, value in parse_customer(customer).items():
            ET.SubElement(customer_elem, key).text = str(value)
    tree = ET.ElementTree(root)
    tree.write("output_files/customers.xml")


def parse_product(product):
    record = product.split(",")
    sku = record[1].strip()
    name = record[2].strip()
    brand = record[3].strip() if len(record) > 3 else None
    price_str = record[4].strip()
    currency = record[5].strip() if len(record) > 5 else "USD"
    return {
        "sku": sku,
        "name": name,
        "brand": brand,
        "price": price_str,
        "currency": currency,
    }


def product_csv(products):
    with open("output_files/products.csv", "w", newline="") as csvfile:
        fieldnames = ["sku", "name", "brand", "price", "currency"]
        writer = csv.DictWriter(
            csvfile,
            fieldnames=fieldnames,
            delimiter=",",
            quotechar=None,
            quoting=csv.QUOTE_NONE,
            escapechar=" ",
        )
        writer.writeheader()
        for product in products:
            parsed_product = parse_product(product)
            if parsed_product:
                writer.writerow(parsed_product)


def parse_order(order):
    record = order.split(",")
    order_id = record[1]
    num_line_items = int(record[2])
    order_sub_total = float(record[3])
    order_tax = float(record[4])
    order_total = float(record[5])
    customer_id = record[6]
    return {
        "order_id": order_id,
        "num_line_items": num_line_items,
        "order_sub_total": order_sub_total,
        "order_tax": order_tax,
        "order_total": order_total,
        "customer_id": customer_id,
    }


def parse_order_line(line):
    record = line.split(",")
    line_num = int(record[1])
    product_name = record[2]
    price = float(record[3])
    quantity = int(record[4])
    return {
        "line_num": line_num,
        "product_name": product_name,
        "price": price,
        "quantity": quantity,
    }


def order_json(orders, order_lines):
    complete_orders = []
    for order, order_line in zip(orders, order_lines):
        parsed_order = parse_order(order)
        parsed_order_data = {
            "id": parsed_order["order_id"].strip('"'),
            "head": {
                "sub_total": parsed_order["order_sub_total"],
                "tax": parsed_order["order_tax"],
                "total": parsed_order["order_total"],
                "customer": parsed_order["customer_id"].strip().strip('"'),
            },
            "lines": [],
        }
        for line in order_line:
            parsed_order_line = parse_order_line(line)
            row_total = round(
                parsed_order_line["price"] * parsed_order_line["quantity"], 2
            )
            parsed_order_line_data = {
                "position": parsed_order_line["line_num"],
                "name": parsed_order_line["product_name"].strip().strip('"'),
                "price": parsed_order_line["price"],
                "quantity": parsed_order_line["quantity"],
                "row_total": row_total,
            }
            parsed_order_data["lines"].append(parsed_order_line_data)
        complete_orders.append(parsed_order_data)

    with open("output_files/orders.json", "w") as jsonfile:
        json.dump({"orders": complete_orders}, jsonfile, indent=4)


def main():
    output_dir = "output_files"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    input_file = "test-file.txt"
    lines = read_file(input_file)
    customers, products, orders, order_lines = categorize(lines)
    customer_xml(customers)
    product_csv(products)
    order_json(orders, order_lines)


if __name__ == "__main__":
    main()
