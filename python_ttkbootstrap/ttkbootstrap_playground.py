from tkinter import *
from ttkbootstrap.constants import *
import ttkbootstrap as tb
from datetime import date
from ttkbootstrap.dialogs import Querybox

root = tb.Window(themename='solar')

root.title('TTK Bootstrap')
root.geometry('500x560')

# # Button Function
# counter = 0
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

root.mainloop()