# 💳 Animated Payment Button (React + Tailwind CSS)

A modern and interactive payment button built with **React** and **Tailwind CSS**, featuring **state-based hover animation** with smooth **fade and slide transitions**.  
Designed for checkout flows such as **parcel pickup payments**, Stripe integrations, or any call-to-action button that needs polished UX.

---

## 🔥 Live Features

- 🎯 Text toggles on hover using React state
- 🎬 Fade + slide animation (no animation libraries)
- 🎨 Hover text color change
- 🚫 Disabled state handling (Stripe not ready)
- 📐 No layout shift during animation
- ⚡ Lightweight & performance-friendly
- ♿ Accessible structure ready

---

## 🧰 Tech Stack

| Technology | Usage |
|----------|------|
| React | UI & state management |
| Tailwind CSS | Styling & animation |
| DaisyUI (optional) | Button UI styling |

---

## 📁 Project Structure

```txt
src/
 ├── components/
 │    └── PayButton.jsx
 ├── App.jsx
 └── main.jsx

```

```
import { useState } from "react";

const PayButton = ({ amount, stripe }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="submit"
      disabled={!stripe}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`btn btn-primary w-full relative overflow-hidden
        ${!stripe ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {/* Default Text */}
      <span
        className={`absolute inset-0 flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${hover ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
      >
        Pay ${amount} for parcel pickup
      </span>

      {/* Hover Text */}
      <span
        className={`absolute inset-0 flex items-center justify-center
          transition-all duration-300 ease-in-out text-yellow-300
          ${hover ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
      >
        Pickup parcel now
      </span>

      {/* Invisible spacer to prevent height shift */}
      <span className="opacity-0">
        Pay ${amount} for parcel pickup
      </span>
    </button>
  );
};

export default PayButton;

```
