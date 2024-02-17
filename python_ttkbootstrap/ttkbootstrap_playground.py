from tkinter import *
from ttkbootstrap.constants import *
import ttkbootstrap as tb
from datetime import date
from ttkbootstrap.dialogs import Querybox
import time
from PIL import Image
Image.CUBIC = Image.BICUBIC

root = tb.Window(themename='solar')

root.title('TTK Bootstrap')
root.geometry('1000x1000')
counter = 0

# # Button Function
# def changer():
#     global counter
#     counter += 1
#     if counter % 2 == 0:
#         label.config(text='Hello World')
#     else:
#         label.config(text='Goodbye World')

# # Label
# label = tb.Label(text='Hello World', font=('Helvetica', 28), bootstyle='danger')
# label.pack(pady=50)

# # Button
# button = tb.Button(text='Click here', bootstyle='primary, outline', command=changer)
# button.pack(pady=75)

# # Checkbox Function
# def checker():
#     if var1.get() == 1: 
#         checkbox_label.config(text='Checked')
#     else:
#         checkbox_label.config(text='Unchecked')

# # # Checkbox Label
# checkbox_label = Label(text='Click the checkbutton below', font=('Helvetica', 18))
# checkbox_label.pack(pady=(40, 10))

# # Checkbox
# var1 = IntVar()
# checkbox = tb.Checkbutton(bootstyle='info', text='Check Me Out', variable=var1, onvalue=1, offvalue=0, command=checker)
# checkbox.pack(pady=10)

# # Toolbutton
# var2 = IntVar()
# checkbox2 = tb.Checkbutton(bootstyle='info, toolbutton', text='Toolbutton', variable=var2, onvalue=1, offvalue=0, command=checker)
# checkbox2.pack(pady=10)

# # Outline Toolbutton
# var3 = IntVar()
# checkbox3 = tb.Checkbutton(bootstyle='info, toolbutton, outline', text='Toolbutton', variable=var3, onvalue=1, offvalue=0, command=checker)
# checkbox3.pack(pady=10)

# # Round Toggle Button
# var4 = IntVar()
# checkbox4 = tb.Checkbutton(bootstyle="success, round-toggle", text='Round Toggle', variable=var4, onvalue=1, offvalue=0)
# checkbox4.pack(pady=10)

# # Square Toggle Button
# var5 = IntVar()
# checkbox5 = tb.Checkbutton(bootstyle="warning, square-toggle", text='Square Toggle', variable=var5, onvalue=1, offvalue=0)
# checkbox5.pack(pady=10)

# # Button Resize
# button_style = tb.Style()
# button_style.configure('success.Outline.TButton', font=('Helvetica', 18))

# button = tb.Button(text='Hello', bootstyle='success', style='success.Outline.TButton', width=20)
# button.pack(pady=40)

# # Combobox
# def click_bind(e):
#     combo_label.config(text=f"Happy {combobox.get()}!")

# combo_label = tb.Label(root, text='Hello World', font=('Helvetica', 18))
# combo_label.pack(pady=30)

# days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

# combobox = tb.Combobox(root, bootstyle='secondary', values=days)
# combobox.pack(pady=10)

# # Set Default Value
# combobox.current(0)

# # Bind the combobox
# combobox.bind('<<ComboboxSelected>>', click_bind)


# # Entry Box
# def speak():
#     entry_label.config(text=f'You typed: {entry.get()}')

# entry = tb.Entry(root, bootstyle='success', font=('Helvetica', 18), foreground='black', width=20, show='*')
# entry.pack(pady=40)

# entry_button = tb.Button(root, bootstyle='danger outline', text='Click Me', command=speak)
# entry_button.pack(pady=10)

# entry_label = tb.Label(root, text="")
# entry_label.pack(pady=20)

# # Floodgauge
# def starter():
#     floodgauge.start()

# def stopper():
#     floodgauge.stop()

# def incer():
#     floodgauge.step(10)

# floodgauge = tb.Floodgauge(root, bootstyle="success", font=('Helvetica', 18), mask='Pos: {}%', maximum=80, orient='horizontal', value=0)
# floodgauge.pack(pady=50, fill=X, padx=20)

# start_button = tb.Button(root, text='Start', bootstyle="danger outline", command=starter)
# start_button.pack(pady=20)

# stop_button = tb.Button(root, text='Stop', bootstyle="danger outline", command=stopper)
# stop_button.pack(pady=20)

# inc_button = tb.Button(root, text='Increment', bootstyle="danger outline", command=incer)
# inc_button.pack(pady=20)

# # Date Entry
# def datey():
#     date_label.config(text=f'Date Picked: {my_date.entry.get()}')

# def thing():
#     cal = Querybox()
#     date_label.config(text=f'Date Picked: {cal.get_date()}')

# my_date = tb.DateEntry(root, bootstyle='danger', firstweekday=0 , startdate=date(1993, 11, 18))
# my_date.pack(pady=50)

# date_button = tb.Button(root, text='Get Date', bootstyle="danger outline", command=datey)
# date_button.pack(pady=20)

# date_button2 = tb.Button(root, text='Get Calendar', bootstyle="light outline", command=thing)
# date_button2.pack(pady=20)

# date_label = tb.Label(root, text="")
# date_label.pack(pady=10)

# # Frame
# def thing():
#     pass

# frame = tb.Frame(root, bootstyle="light")
# frame.pack(pady=40)

# frame_entry = tb.Entry(frame, font=('Helvetica', 18))
# frame_entry.pack(pady=20, padx=20)

# frame_button = tb.Button(frame, text='Click Me', bootstyle='dark', command=thing)
# frame_button.pack(pady=20, padx=20)

# farme_label = tb.Label(root, text='Hello There', font=('Helvetica', 18))
# farme_label.pack(pady=20)

# # Menu Buttons
# def stuff(x):
#         menu.config(bootstyle=x)

# menu = tb.Menubutton(root, bootstyle="warning", text="Things")
# menu.pack(pady=50)

# inside_menu = tb.Menu(menu)

# item_var = StringVar()
# for x in ['primary', 'secondary', 'danger', 'light', 'warning', 'success', 'info', 'dark', 'primary outline', 'secondary outline', 'danger outline', 'light outline', 'warning outline', 'success outline', 'info outline', 'dark outline']:
#     inside_menu.add_radiobutton(label=x, variable=item_var, command=lambda x=x: stuff(x))
    
# menu['menu'] = inside_menu

# # Meter
# def clicker():
#     global counter
#     counter += 5
#     my_meter.configure(amountused=counter)

# def up():
#     my_meter.step(10)

# def down():
#     my_meter.step(-10)

# my_meter = tb.Meter(root, bootstyle='warning', subtext='Tkinter Learned', subtextstyle='success' , interactive=True, textright='%', metertype='full', stripethickness=10, metersize=200, padding=50, amountused=20, amounttotal=100)
# my_meter.pack(pady=40)

# meter_button = tb.Button(root, text='Click Me', bootstyle='success outline', command=clicker)
# meter_button.pack(pady=10)

# meter_up = tb.Button(root, text='Step Up', bootstyle='success outline', command=up)
# meter_up.pack(pady=10)

# meter_down = tb.Button(root, text='Step Down', bootstyle='success outline', command=down)
# meter_down.pack(pady=10)

# # Notebook Tabs
# notebook = tb.Notebook(root, bootstyle='dark')
# notebook.pack(pady=40)

# tab1 = tb.Frame(notebook)
# tab2 = tb.Frame(notebook)

# notebook_label1 = Label(tab1, text='Awesome', font=('Helvetica', 18))
# notebook_label1.pack(pady=20)

# notebook_text = Text(tab1, width=70, height=10)
# notebook_text.pack(pady=10, padx=10)

# notebook_button = tb.Button(tab1, text='Click Me', bootstyle=" danger outline")
# notebook_button.pack(pady=20)

# notebook_label2 = Label(tab2, text='Second Tab WOW', font=('Helvetica', 18))
# notebook_label2.pack(pady=10)

# # Adding Tabs
# notebook.add(tab1, text='Tab 1')
# notebook.add(tab2, text='Tab 2')

# # Progress Bars
# def progress_increment():
#     progressbar['value'] += 20

#     progressbar_label.config(text=progressbar['value'])

# def progress_start():
#     progressbar.start(10)

# def progress_stop():
#     progressbar.stop()

# def progress_auto():
#     for x in range(5):
#         progressbar['value'] += 20
#         progressbar_label.config(text=progressbar['value'])
#         root.update_idletasks()
#         time.sleep(1)

# progressbar = tb.Progressbar(root, bootstyle="danger", maximum=100, mode="determinate", length=300, value=0)
# progressbar.pack(pady=40)

# progressbar_frame = tb.Frame(root)
# progressbar_frame.pack(pady=20)

# start_progress = tb.Button(progressbar_frame, bootstyle="info", text='Start', command=progress_start)
# start_progress.grid(column=0, row=0, padx=10)

# stop_progress = tb.Button(progressbar_frame, bootstyle="danger", text='Stop', command=progress_stop)
# stop_progress.grid(column=1, row=0, padx=10)

# auto_progress = tb.Button(progressbar_frame, bootstyle="info", text='Auto', command=progress_auto)
# auto_progress.grid(column=2, row=0, padx=10)

# progressbar_button = tb.Button(progressbar_frame, bootstyle="info", text='Increment 20', command=progress_increment)
# progressbar_button.grid(column=3, row=0, padx=10)

# progressbar_label = tb.Label(root, text="", font=('Helvetica', 18))
# progressbar_label.pack(pady=10)

# # Radio Buttons
# def radio_clicker():
#     radio_label.config(text=f'You Picked: {my_topping.get()}')

# toppings = ['Pepperoni', 'Cheese', 'Veggie']

# my_topping = StringVar()

# for topping in toppings:
#     tb.Radiobutton(root, bootstyle='danger', variable=my_topping, text=topping, value=topping, command=radio_clicker).pack(pady=20)

# radio_label = tb.Label(root, text="")
# radio_label.pack(pady=20)

# # Sliders
# def slide_scale(e):
#     slider_label.config(text=int(slider['value']))

# slider = tb.Scale(root, bootstyle="light", length=400, orient="horizontal", from_=0, to=100, command=slide_scale)
# slider.pack(pady=40)

# slider_label = tb.Label(root, text=slider['value'])
# slider_label.pack(pady=10)

# # Scrollbar
# scroll_frame = tb.Frame(root)
# scroll_frame.pack(pady=20)

# scrollbar = tb.Scrollbar(scroll_frame, orient="vertical", bootstyle="warning round")
# scrollbar.pack(side="right", fill="y")

# scroll_text = Text(scroll_frame, width=30, height=25, yscrollcommand=scrollbar.set, wrap="none", font=('Helvetica', 18))
# scroll_text.pack()

# scrollbar.config(command=scroll_text.yview)

# # Separator 
# sep_label1 = tb.Label(root, bootstyle="danger", text="Label 1")
# sep_label1.pack(pady=20)

# separator = tb.Separator(root, bootstyle='success', orient='horizontal')
# separator.pack(fill='x', padx=20)

# sep_label2 = tb.Label(root, bootstyle="danger", text="Label 2")
# sep_label2.pack(pady=20)

# # Sizegrip
# sizegrip = tb.Sizegrip(root, bootstyle='info')
# sizegrip.pack(anchor='se', fill='both', expand=True)

# # Spinboxes
# def spinbox_message():
#     spinbox_label.config(text=f'Hello {spinbox.get()}')

# spinbox_list = ["Nemo", 'Tomr', 'Nick', 'C-Money']

# spinbox = tb.Spinbox(root, bootstyle='primary', from_=0, to=10, values=spinbox_list, state='readonly', font=('Helvetica', 18), command=spinbox_message)
# spinbox.pack(pady=20)

# spinbox_label = tb.Label(root, text="", font=('Helvetica', 18))
# spinbox_label.pack(pady=10)

# # Set spinbox default
# spinbox.set("Naruto")

# # Treeview
# tree_columns = ("first_name", "last_name", "email")

# tree = tb.Treeview(root, bootstyle="dark", columns=tree_columns, show="headings")
# tree.pack(pady=20)

# tree.heading('first_name', text='First Name')
# tree.heading('last_name', text='Last Name')
# tree.heading('email', text='Email Address')

# contacts = []

# for n in range(1, 20):
#     contacts.append((f'First {n}', f'Last {n}', f'email{n}@address.com'))

# for contact in contacts:
#     tree.insert('', END, values=contact)

root.mainloop()