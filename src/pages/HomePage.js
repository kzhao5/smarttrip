// Home page – trip info form
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { destination, startDate, endDate, budget } = e.target.elements;
    const tripInfo = {
      destination: destination.value,
      startDate: startDate.value,
      endDate: endDate.value,
      budget: budget.value,
    };
    localStorage.setItem("tripInfo", JSON.stringify(tripInfo));
    navigate("/recommendations");
  };

  return (
    <main className="form-section">
      <form id="tripForm" className="trip-form" onSubmit={handleSubmit}>
        {/* inputs same as html */}
        <label>
          Destination:
          <input name="destination" placeholder="e.g. Paris" required />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" required />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" required />
        </label>
        <label>
          Budget ($):
          <input type="number" name="budget" placeholder="1500" required />
        </label>
        <button type="submit" className="plan-btn">
          Start Planning
        </button>
      </form>
    </main>
  );
}

export default HomePage;
