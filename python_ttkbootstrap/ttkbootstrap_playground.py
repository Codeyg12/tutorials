from tkinter import *
from ttkbootstrap.constants import *
import ttkbootstrap as tb

root = tb.Window(themename='solar')

root.title('TTK Bootstrap')
root.geometry('500x360')

# Label
label = tb.Label(text='Hello World', font=('Helvetica', 28), bootstyle='danger')
label.pack(pady=50)

# Button
button = tb.Button(text='Click here', bootstyle='primary')
button.pack(pady=75)


root.mainloop()