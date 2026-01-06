```
  <button
        type="submit"
        disabled={!stripe}
        className="btn btn-primary w-full relative group overflow-hidden transition-all duration-300"
      >
        {/* Normal text */}
        <span className="block group-hover:hidden transition-all duration-300">
          Pay ${amount}
        </span>

        {/* Hover text */}
        <span className="hidden group-hover:block text-yellow-300 transition-all duration-300">
          Pickup parcel now
        </span>
      </button>
```
