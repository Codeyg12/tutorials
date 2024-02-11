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
        canvas.create_line(prev_x, prev_y, current_x, current_y, fill=drawing_color, width=line_width, capstyle=tl.ROUND, smooth=True)
        prev_x, prev_y = current_x, current_y

def stop_draw(e):
    global is_drawing
    is_drawing = False