import React from "react";
import FeatureItem from "./_components/FeatureItem";

const PageFeatures = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 from-20%   via-slate-200 via-80% to-slate-100  to-2% py-10">
      <div className="container max-w-6xl  mx-auto">
        <div className="text-center py-10">
          <h2 className="text-gray-800 text-4xl font-bold  ">Features</h2>
          <p className="pt-4 text-center text-slate-500 text-base font-normal mx-auto w-2/4">
            We provide a number of excellent features that will undoubtedly
            improve the user experience. We also provide a better support system
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-4 gap-x-2">
          <FeatureItem
            image="/images/features/icon1.png"
            title={"Encrypted Mail"}
            description={"A process of encrypting email communications"}
          />
          <FeatureItem
            image="/images/features/icon2.png"
            title={"Display Sharing"}
            description={"With other participants, you may share your screen"}
          />
          <FeatureItem
            image="/images/features/icon3.png"
            title={"Private Notebook"}
            description={"Private Notebook is an application that is protected"}
          />
          <FeatureItem
            image="/images/features/icon4.png"
            title={"App App Assistance"}
            description={
              "App Assistant is quickly and effectively ran the system"
            }
          />
          <FeatureItem
            image="/images/features/icon5.png"
            title={"Multiple Printing"}
            description={"Our canvas prints are crafted on top-notch canvas."}
          />
          <FeatureItem
            image="/images/features/icon6.png"
            title={"Free Sketch"}
            description={"Our canvas prints are crafted on top-notch canvas."}
          />
        </div>
      </div>
    </div>
  );
};

export default PageFeatures;
