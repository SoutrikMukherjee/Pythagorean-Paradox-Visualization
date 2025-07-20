# Line Segment Common Divisor Visualization

An interactive mathematical visualization demonstrating the relationship between line segments with common divisor constraints.

## 🎯 Live Demo
[View the simulation here](https://your-username.github.io/line-segment-simulation/)

## 📐 Problem Description
Given three line segments:
- Line AB = 36 inches
- Line CD = 10 inches  
- Line XY = unknown length

The constraint is that XY must satisfy:
- mx = 36 inches (where m ∈ ℤ⁺)
- nx = 10 inches (where n ∈ ℤ⁺)

This means XY must be a common divisor of both 36 and 10.

## 🔍 Mathematical Solution
The common divisors of 36 and 10 are:
- **1** (36 = 36×1, 10 = 10×1)
- **2** (36 = 18×2, 10 = 5×2)

Therefore, XY can only be 1 inch or 2 inches long.

## ✨ Features
- **Interactive Controls**: Switch between XY = 1 inch and XY = 2 inches
- **Visual Divisions**: See how many times XY fits into AB and CD
- **Animation Mode**: Automatically alternate between valid lengths
- **Mathematical Verification**: Real-time display of m and n values

## 🛠️ Technologies Used
- HTML5 Canvas for rendering
- Vanilla JavaScript for interactivity
- CSS3 for styling

## 📂 Project Structure
