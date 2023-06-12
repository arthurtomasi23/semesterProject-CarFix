import React from "react";
import Sidebar from "../components/Sidebar";
import StepByStep from "../components/Stepbytest";

const App = () => {
  const guides = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "4/10",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "4/10",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "4/10",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "4/10",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "Tire changing image",
      difficulty: "4/10",
      time: 30,
      title: "Changing Tires",
      shortIntroduction: "Changig the tires of a 2001 BMW E46 325i",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      {guides.map((guideItem) => (
        <div className="flex-1 ml-7">
          <StepByStep guide={guideItem} />
        </div>
      ))}
    </div>
  );
};

export default App;
