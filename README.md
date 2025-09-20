# Line Segment Common Divisor Visualization

<div align="center">

![Mathematical Visualization](https://img.shields.io/badge/Mathematical-Visualization-blue?style=for-the-badge)
![Interactive Demo](https://img.shields.io/badge/Interactive-Demo-green?style=for-the-badge)
![Educational Tool](https://img.shields.io/badge/Educational-Tool-orange?style=for-the-badge)

**An interactive mathematical visualization demonstrating the relationship between line segments with common divisor constraints.**

[🎯 **View Live Demo**](https://soutrikmukherjee.github.io/Pythagorean-Paradox-Visualization/) | [📊 **Open Interactive Version**](./visualization.html) | [📖 **Documentation**](#mathematical-solution)

</div>

---

## 📐 Problem Visualization

<div align="center">

```
Line AB: ████████████████████████████████████████  (36 inches)
Line CD: ████████████  (10 inches)
Line XY: ██  (? inches - must be a common divisor)
```

</div>

### 🧮 Mathematical Constraint

Given three line segments, find the length of XY such that:

<div align="center">

| Constraint | Equation | Requirement |
|------------|----------|-------------|
| **First** | `m × XY = 36 inches` | `m ∈ ℤ⁺` (positive integer) |
| **Second** | `n × XY = 10 inches` | `n ∈ ℤ⁺` (positive integer) |

</div>

**Key Insight**: XY must be a common divisor of both 36 and 10.

---

## 🔍 Step-by-Step Solution

### Step 1: Find All Divisors

<details>
<summary><strong>📊 Divisor Analysis</strong></summary>

```
Divisors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36
Divisors of 10: 1, 2, 5, 10

Common Divisors: 1, 2 ✓
```

</details>

### Step 2: Visual Verification

<div align="center">

#### When XY = 1 inch:
```
AB (36): |—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|—|
         1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36

CD (10): |—|—|—|—|—|—|—|—|—|—|
         1 2 3 4 5 6 7 8 9 10
```

#### When XY = 2 inches:
```
AB (36): |——|——|——|——|——|——|——|——|——|——|——|——|——|——|——|——|——|——|
         2   4   6   8   10  12  14  16  18  20  22  24  26  28  30  32  34  36

CD (10): |——|——|——|——|——|
         2   4   6   8   10
```

</div>

### Step 3: Mathematical Verification

| XY Length | m (36 ÷ XY) | n (10 ÷ XY) | Valid? |
|-----------|-------------|-------------|---------|
| **1 inch** | 36 | 10 | ✅ Both integers |
| **2 inches** | 18 | 5 | ✅ Both integers |
| 3 inches | 12 | 3.33... | ❌ Non-integer |
| 5 inches | 7.2 | 2 | ❌ Non-integer |

---

## ✨ Interactive Features

<div align="center">

### 🎮 Demo Controls

| Feature | Description | Educational Value |
|---------|-------------|-------------------|
| **Toggle XY Length** | Switch between 1" and 2" | Compare valid solutions |
| **Show Divisions** | Visual segment markers | Understand factor relationships |
| **Animation Mode** | Auto-alternate lengths | See dynamic comparison |
| **Step-by-Step** | Guided explanation | Learn the mathematical process |

</div>

---

## 🚀 Quick Start

### Option 1: Online Demo
Click here to view the live visualization: [**Interactive Demo**](https://soutrikmukherjee.github.io/Pythagorean-Paradox-Visualization/)

### Option 2: Local Setup
```bash
# Clone the repository
git clone https://github.com/SoutrikMukherjee/Pythagorean-Paradox-Visualization.git

# Navigate to project directory
cd Pythagorean-Paradox-Visualization

# Open in browser
open index.html
# or
python -m http.server 8000  # For Python 3
```

---

## 🎯 Educational Applications

<div align="center">

### 📚 Learning Objectives

</div>

| Concept | Application | Grade Level |
|---------|-------------|-------------|
| **Greatest Common Divisor (GCD)** | Finding common factors | Middle School |
| **Factor Relationships** | Understanding divisibility | Elementary/Middle |
| **Constraint Satisfaction** | Problem-solving with conditions | High School |
| **Visual Mathematics** | Geometric representation | All Levels |

### 👥 Target Audience

- **Students**: Visual learners studying factors and divisors
- **Educators**: Teachers demonstrating GCD concepts
- **Parents**: Helping with homework visualization
- **Self-learners**: Anyone exploring mathematical relationships

---

## 🛠️ Technical Implementation

<div align="center">

### 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   HTML5 Canvas  │ ←→ │ JavaScript Logic │ ←→ │  CSS3 Styling   │
│   Rendering     │    │   Calculations   │    │   UI Design     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

</div>

### 📋 Technologies

- **Frontend**: HTML5 Canvas, Vanilla JavaScript, CSS3
- **Animation**: RequestAnimationFrame API
- **Interactivity**: Event-driven programming
- **Mathematics**: Real-time GCD calculations

### 📂 Project Structure

```
Pythagorean-Paradox-Visualization/
├── 📄 index.html              # Main entry point
├── 📄 visualization.html      # Enhanced visualization
├── 📁 css/
│   └── 📄 styles.css         # Styling and animations
├── 📁 js/
│   └── 📄 simulation.js      # Core logic and rendering
└── 📄 README.md              # This documentation
```

---

## 🔬 Mathematical Background

### 🧮 The GCD Connection

This visualization demonstrates a fundamental principle in number theory:

> **For positive integers a and b, any common divisor d must satisfy d|gcd(a,b)**

In our case:
- a = 36, b = 10
- gcd(36, 10) = 2
- Common divisors: {1, 2}

### 📐 Geometric Interpretation

Each line segment represents a discrete mathematical object where:
- **Length** corresponds to **magnitude**
- **Divisions** correspond to **factors**
- **Common measures** correspond to **common divisors**

---

## 🎨 Visual Design Principles

### 🌈 Color Coding

- **🔴 Red (Line AB)**: Primary constraint (36 inches)
- **🔵 Blue (Line CD)**: Secondary constraint (10 inches)  
- **🟡 Yellow (Line XY)**: Variable solution (1 or 2 inches)

### 📱 Responsive Design

The visualization adapts to different screen sizes while maintaining mathematical accuracy and visual clarity.

---

## 🤝 Contributing

We welcome contributions that enhance the educational value of this visualization!

### 🛠️ Ways to Contribute

- **🐛 Bug Reports**: Found an issue? [Open an issue](https://github.com/SoutrikMukherjee/Pythagorean-Paradox-Visualization/issues)
- **💡 Feature Requests**: Ideas for improvement? [Suggest features](https://github.com/SoutrikMukherjee/Pythagorean-Paradox-Visualization/issues)
- **📖 Documentation**: Help improve explanations
- **🎨 UI/UX**: Enhance visual design
- **📚 Educational Content**: Add learning materials

### 📝 Development Setup

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Pythagorean-Paradox-Visualization.git

# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and test
# Commit and push
git commit -m "Add: your feature description"
git push origin feature/your-feature-name

# Create a Pull Request
```

---

## 📈 Future Enhancements

<div align="center">

### 🚧 Roadmap

</div>

- [ ] **3D Visualization**: Extend to three-dimensional space
- [ ] **Multiple Segments**: Handle more than three line segments
- [ ] **Custom Inputs**: Allow user-defined segment lengths
- [ ] **Sound Integration**: Audio feedback for mathematical relationships
- [ ] **Accessibility**: Screen reader support and keyboard navigation
- [ ] **Mobile App**: Native mobile application
- [ ] **VR/AR Version**: Immersive mathematical experience

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🏆 Acknowledgments

- **Mathematical Foundation**: Based on classical number theory
- **Educational Inspiration**: Designed for visual learners
- **Community Feedback**: Improved through user suggestions

---

<div align="center">

### ⭐ If this visualization helped you understand mathematical concepts, please give it a star!

**Made with ❤️ for the mathematics education community**

[🔝 Back to Top](#line-segment-common-divisor-visualization)

</div>
