import Container from "../Container";

const Issues = () => {
  return (
    <>
      <Container>
        <div className="pb-10 pt-32">
          <h1 className="text-[#F0D268] text-gray text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase">
            Issues
          </h1>
        </div>
        <div className="text-white text-lg list-decimal list-inside space-y-20">
          <div className="text-lg lg:text-2xl">
            <a href="#" className="bg-[#0E8A16] text-white p-2 text-lg font-bold rounded-md uppercase">issue #1</a> Create a frontend based on the given wireframe with responsiveness
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-lg pt-3">
              <li>
                The frontend should be according to the wireframe that we
                provided.
              </li>
              <li>You can improve UI/UX if you want.</li>
              <li>The frontend should be responsive.</li>
            </ul>
          </div>
          <div className="text-lg lg:text-2xl">
            <a href="#" className="bg-[#5319E7] text-white p-2 text-lg font-bold rounded-md uppercase">issue #2</a> Select items based on the pre-selected quantity
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-lg pt-3">
              <li>
                The user needs to select a quantity first for each section.
              </li>
              <li>
                After selecting a quantity, the user is only able to select
                items according to the pre-selected quantity.
                <div className="my-4 italic">
                  Ex: If he selects quantity as 2 in the guns section, he will
                  only be able to select 2 types of guns in the below-selected
                  area.
                </div>
              </li>
              <li>Give warnings according to the above limitations.</li>
              <li>Selecting buttons should be toggleable.</li>
            </ul>
          </div>
          <div className="text-lg lg:text-2xl">
            <a href="#" className="bg-[#D93F0B] text-white p-2 text-lg font-bold rounded-md uppercase">issue #3</a> Interactive clicks (toggle buttons)
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-lg pt-3">
              <li>
                You need to update the subtotal of each section based on the
                selected item prices.
              </li>
              <li>
                The subtotal should be updated in real time.If the user
                unselects an item, the subtotal needs to be reduced, and if he
                selects an item, it should be incease.
              </li>
            </ul>
          </div>
          <div className="text-lg lg:text-2xl">
            <a href="#" className="bg-[#1D76DB] text-white p-2 text-lg font-bold rounded-md uppercase">issue #4</a> Check that the selected item numbers match the selected quantities
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-lg pt-3">
              <li>
                When pressing the order now button, you need to check the
                selected item count in each section to match the quantity you
                defined at the top.
              </li>
              <li>
                If the user selects fewer items than defined at the top, give a
                warning message.
              </li>
            </ul>
          </div>
          <div className="text-lg lg:text-2xl">
            <a href="#" className="bg-[#006B75] text-white p-2 text-lg font-bold rounded-md uppercase">issue #5</a> Final submit popup and thank you message
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside text-lg pt-3">
              <li>
                After completing all four issues, only you can complete this
                one.
              </li>
              <li>
                You should get the subtotal price of the gun prices and
                inventory and display the total price with a pay-now button in a
                pop-up box.
              </li>
              <li>
                When the user clicked the pay now button, a thank-you message
                was given, and the quantity and other selected items were reset.
              </li>
              <li>
                You can create a popup and thank-you message UI as you wish.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Issues;
