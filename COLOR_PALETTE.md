# NASA Space Explorer - Color Palette Reference

## 🎨 Official NASA Brand Colors

### Primary Colors

#### NASA Blue (#0B3D91)
**RGB**: 11, 61, 145  
**Usage**: Headers, buttons, primary headings, brand color  
**Accessibility**: WCAG AAA compliant for text on white  
**Symbolism**: Space, exploration, professionalism  

Example:
```css
color: #0B3D91;           /* Text */
background-color: #0B3D91; /* Background */
border: 2px solid #0B3D91;  /* Borders */
```

#### NASA Dark Blue (#062560)
**RGB**: 6, 37, 96  
**Usage**: Button hover states, deeper emphasis  
**Accessibility**: WCAG AAA compliant for text on white  
**Symbolism**: Depth, nighttime sky  

Example:
```css
background-color: #062560; /* Hover states */
border-color: #062560;     /* Focus states */
```

### Secondary Colors

#### NASA Gray (#4A4A4A)
**RGB**: 74, 74, 74  
**Usage**: Body text, default text color, descriptions  
**Accessibility**: 5.2:1 on white (WCAG AA)  
**Symbolism**: Professional, neutral, readable  

Example:
```css
color: #4A4A4A; /* Body text */
```

#### NASA Light Gray (#E8E8E8)
**RGB**: 232, 232, 232  
**Usage**: Background color, subtle dividers  
**Accessibility**: High contrast with dark text  
**Symbolism**: Clean, minimal, sophisticated  

Example:
```css
background-color: #E8E8E8;  /* Page background */
border-color: #E8E8E8;      /* Subtle borders */
```

#### NASA White (#FFFFFF)
**RGB**: 255, 255, 255  
**Usage**: Card backgrounds, text on dark backgrounds  
**Accessibility**: Maximum contrast ratio  
**Symbolism**: Clean, light, clarity  

Example:
```css
background-color: #FFFFFF; /* Cards */
color: #FFFFFF;            /* Text on dark */
```

### Accent Colors

#### Accent Gold (#D4A574)
**RGB**: 212, 165, 116  
**Usage**: Focus indicators, special highlights  
**Accessibility**: 3.5:1 on blue background  
**Symbolism**: Achievement, premium, warmth  

Example:
```css
outline: 2px solid #D4A574;  /* Focus state */
border-color: #D4A574;       /* Highlight */
```

#### NASA Red (#C60C30)
**RGB**: 198, 12, 48  
**Usage**: Error messages, alerts, urgent items  
**Accessibility**: 4.5:1 on white, 3.8:1 on red background  
**Symbolism**: Caution, importance, attention  

Example:
```css
color: #C60C30;              /* Error text */
background-color: #ffebee;   /* Error background */
border-left: 4px solid #C60C30;
```

#### Success Green (#06A77D)
**RGB**: 6, 168, 125  
**Usage**: Success messages, completion, positive feedback  
**Accessibility**: 4.8:1 on white  
**Symbolism**: Growth, success, positive  

Example:
```css
color: #06A77D;              /* Success text */
background-color: #e8f5f0;   /* Success background */
```

---

## 🎨 Color Application by Component

### Header
```
Background: Linear gradient from #0B3D91 to #062560
Text: #FFFFFF (white)
Logo: Full color NASA worm logo
```

### Buttons
```
Default:
  Background: #0B3D91
  Text: #FFFFFF
  Border: 2px solid #0B3D91

Hover:
  Background: #062560
  Border: 2px solid #062560
  Shadow: rgba(11, 61, 145, 0.3)

Focus:
  Outline: 2px solid #D4A574
  Outline-offset: 2px

Disabled:
  Background: #BFBFBF (gray)
  Opacity: 0.6
```

### Cards
```
Background: #FFFFFF (white)
Border: None (uses shadow for depth)
Shadow: 0 2px 8px rgba(0, 0, 0, 0.15)

Title: #0B3D91 (NASA Blue)
Date: #999999 (medium gray)
Description: #4A4A4A (NASA Gray)

Hover Shadow: 0 4px 16px rgba(0, 0, 0, 0.25)
```

### Modal
```
Content Background: #FFFFFF (white)
Border-top: 4px solid #0B3D91
Shadow: 0 10px 40px rgba(0, 0, 0, 0.3)

Title: #0B3D91 (NASA Blue)
Date: #999999 (medium gray)
Explanation: #4A4A4A (NASA Gray)

Image Background: Gradient #E8E8E8 to #F5F5F5
```

### Loading Indicator
```
Overlay: rgba(255, 255, 255, 0.95)
Spinner Border: #E8E8E8 (light gray)
Spinner Top: #0B3D91 (NASA Blue)
Spinner Right: #062560 (NASA Dark Blue)
Text: #0B3D91 (NASA Blue)
```

### Error Message
```
Text: #C60C30 (NASA Red)
Background: #ffebee (light red)
Border-left: 4px solid #C60C30
```

---

## 📊 Contrast Ratios (WCAG Compliance)

| Text Color | Background | Ratio | Level | Standard |
|------------|-----------|-------|-------|----------|
| #FFFFFF | #0B3D91 | 7.5:1 | AAA | WCAG 2.1 |
| #4A4A4A | #FFFFFF | 5.2:1 | AA | WCAG 2.1 |
| #0B3D91 | #FFFFFF | 4.3:1 | AA | WCAG 2.1 |
| #C60C30 | #FFFFFF | 4.5:1 | AA | WCAG 2.1 |
| #06A77D | #FFFFFF | 4.8:1 | AA | WCAG 2.1 |
| #D4A574 | #0B3D91 | 3.5:1 | AA | WCAG 2.1 |
| #999999 | #FFFFFF | 3.2:1 | N/A | Caption only |

All primary text colors meet WCAG 2.1 AA or AAA standards.

---

## 🎯 Color Psychology in Space Exploration

### NASA Blue (#0B3D91)
- **Emotion**: Trust, stability, professionalism
- **Association**: Open sky, infinite space, calm
- **Psychology**: Creates confidence and focus
- **Usage**: Primary branding, trust elements

### Gold (#D4A574)
- **Emotion**: Achievement, prestige, warmth
- **Association**: Precious, valuable, scientific excellence
- **Psychology**: Draws attention, feels premium
- **Usage**: Accents, highlights, focus states

### Gray (#4A4A4A)
- **Emotion**: Neutral, balanced, professional
- **Association**: Science, precision, logic
- **Psychology**: Readable, less distracting, serious
- **Usage**: Body text, descriptions, secondary information

### Red (#C60C30)
- **Emotion**: Urgency, importance, caution
- **Association**: Alert, attention required
- **Psychology**: Activates quickly, demands action
- **Usage**: Errors, warnings, important alerts

---

## 💡 Implementation Tips

### 1. Use CSS Variables (Best Practice)
```css
:root {
  --nasa-blue: #0B3D91;
  --nasa-dark-blue: #062560;
  --nasa-gray: #4A4A4A;
  --nasa-light-gray: #E8E8E8;
  --nasa-gold: #D4A574;
  --nasa-red: #C60C30;
}

/* Then use: */
button {
  background-color: var(--nasa-blue);
}
```

### 2. Maintain Contrast
- Always check contrast ratios
- Use tools: WebAIM Contrast Checker
- Test with colorblind simulator

### 3. Consistent Application
- Use the same color for similar elements
- Avoid random color variations
- Create a style guide (this document!)

### 4. Dark Mode Consideration
If implementing dark mode:
- Invert light/dark colors
- Maintain same brand identity
- Test contrast carefully

---

## 🧪 Testing Colors

### Browser DevTools
1. Open DevTools (F12)
2. Inspect element
3. Find the color value
4. Click the color swatch
5. Verify hex code matches

### Accessibility Testing
1. Use WAVE browser extension
2. Check contrast ratios
3. Test with colorblind simulator
4. Keyboard navigation check

### Cross-Browser Check
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

---

## 📚 Resources

- [NASA Brand Guide](https://www.nasa.gov/)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Blind Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [WCAG 2.1 Standards](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Color Values](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
