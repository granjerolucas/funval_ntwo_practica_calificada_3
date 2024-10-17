import React from "react";
import Card from "./_components/Card";

const PageServices = () => {
  return (
    <div className=" bg-[url('/images/services/illustration1.png')] bg-[length:200px_200px] bg-[top_8rem_left_15rem]  bg-no-repeat py-10">
      <div className="container max-w-6xl  mx-auto">
        <div className="text-center py-10">
          <h2 className="text-gray-800 text-4xl font-bold  ">Service</h2>
          <p className="pt-4 text-center text-slate-500 text-base font-normal mx-auto w-2/4">
            We offer youth with chances for career development in their
            practice. We also support a wide range of services to ensure client
            satisfaction
          </p>
          <div className="mt-20 bg-slate-300x flex justify-between gap-2">
            <Card
              title="Send Texts Instantly"
              image="/images/services/chat_duo.png"
              description="Financial planning, forecasting and adjusting rapidly with customer demands and budgets."
              className="bg-gradient-to-b from-slate-100 from-10%  via-slate-200 to-slate-100 to-10%"
            />
            <Card
              title="Better Organized"
              description="Latest technology and experienced guidance, trained HR specialists to keep updated."
              image="/images/services/layer_duo.png"
              className="bg-slate-50"
            />
            <Card
              title="Analytical Statistics"
              description="Messages, real-time reminders, memos, and many more will keep your team in sync."
              image="/images/services/bar_chart_duo.png"
              className="bg-gradient-to-b from-slate-100 from-10%  via-slate-200 to-slate-100 to-10%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageServices;
