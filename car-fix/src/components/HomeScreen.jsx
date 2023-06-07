import React from 'react';

const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("your-image-url.jpg")' }}>
      <h1 className="text-center text-4xl font-bold text-white">CarFix</h1>
      <p className="text-xl text-white m-8 text-center">
        "Welcome to CarFix: Your Ultimate Guide to DIY Car Repairs!
        Explore our comprehensive step-by-step guides to revive your ride
        with confidence. From troubleshooting common issues to tackling complex
        repairs, we've got you covered. Plus, unleash your expertise by creating
        and sharing your own customized guides, helping fellow car enthusiasts overcome
        any automotive challenge. Get ready to take control of your car's maintenance and
        unleash your inner mechanic with CarFix!"</p>
    </div>
  );
};

export default HomeScreen;