from tkinter import *
from ttkbootstrap.constants import *
import ttkbootstrap as tb

root = tb.Window(themename='solar')

root.title('TTK Bootstrap')
root.geometry('500x360')

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


# Entry Box
def speak():
    entry_label.config(text=f'You typed: {entry.get()}')

entry = tb.Entry(root, bootstyle='success', font=('Helvetica', 18), foreground='black', width=20, show='*')
entry.pack(pady=40)

entry_button = tb.Button(root, bootstyle='danger outline', text='Click Me', command=speak)
entry_button.pack(pady=10)

entry_label = tb.Label(root, text="")
entry_label.pack(pady=20)

root.mainloop()