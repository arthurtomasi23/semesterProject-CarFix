import React from 'react';

const HomeScreen = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 flex flex-col"></div>
        <div className='flex-col z-20'>
          <h1 className="flex-col text-center text-4xl font-bold text-white">CarFix</h1>
            <p className="text-xl text-white m-8 text-center">
              "Welcome to CarFix: Your Ultimate Guide to DIY Car Repairs!
              Explore our comprehensive step-by-step guides to revive your ride
              with confidence. From troubleshooting common issues to tackling complex
              repairs, we've got you covered. Plus, unleash your expertise by creating
              and sharing your own customized guides, helping fellow car enthusiasts overcome
              any automotive challenge. Get ready to take control of your car's maintenance and
              unleash your inner mechanic with CarFix!"
            </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
