import tkinter as tk
from tkinter.colorchooser import askcolor

def start_drawing(e):
    global is_drawing, prev_x, prev_y
    if is_drawing:
        current_x, current_y = e.x, e.y
        canvas.create_line(prev_x, prev_y, current_x, current_y, fill=drawing_color, width=line_width, capstyle=tk.ROUND, smooth=True)
        prev_x, prev_y = current_x, current_y

def draw(e):
    global is_drawing, prev_x, prev_y
    if is_drawing:
        current_x, current_y = e.x, e.y
        canvas.create_line(prev_x, prev_y, current_x, current_y, fill=drawing_color, width=line_width, capstyle=tk.ROUND, smooth=True)
        prev_x, prev_y = current_x, current_y

def stop_draw(e):
    global is_drawing
    is_drawing = False

def change_pen_color():
    global drawing_color
    color = askcolor()[1]
    if color:
        drawing_color = color

def change_line_width(value):
    global line_width
    line_width = int(value)

root = tk.Tk()
root.title('Whiteboard App')

canvas = tk.Canvas(root, bg='white')
canvas.pack(fill='both', expand=True)

is_drawing = False
drawing_color = 'black'
line_width = 2

root.geometry('800x600')

controls_frame = tk.Frame(root)
controls_frame.pack(side='top', fill='x')

color_button = tk.Button(controls_frame, text='Change Color', command=change_pen_color)
clear_button = tk.Button(controls_frame, text='Clear Canvas', command=lambda: canvas.delete('all'))

color_button.pack(side='left', padx=5, pady=5)
clear_button.pack(side='left', padx=5, pady=5)