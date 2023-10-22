import Container from "../Container";

const Issues = () => {
  return (
    <>
      <Container>
        <div className="pb-10 pt-32">
          <h1 className="text-gray text-2xl md:text-4xl lg:text-5xl font-semibold uppercase">
            #Issues
          </h1>
        </div>

        <ol className="space-y-4 text-white text-lg list-decimal list-inside ">
          <li>
            Create a frontend based on the given wireframe with responsiveness.
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                Frontend should be according to wireframe that we provided.
              </li>
              <li>You can improve UI/UX if you want</li>
              <li>Frontend should be responsive</li>
            </ul>
          </li>
          <li>
            Select items based on the pre-selected quantity.
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                The user needs to select a quantity first for each section.
              </li>
              <li>
                After selecting quantity, the user is only able to select items
                according to the pre-selected quantity.
                <div className="my-4 italic">
                  Ex: If he selects quantity as 2 in the guns section, he will
                  only be able to select 2 types.of guns in the below-selected
                  area.
                </div>
              </li>
              <li>Give warnings according to the above limitations.</li>
              <li>Selecting buttons should be toggleable.</li>
            </ul>
          </li>
          <li>
            Interactive clicks (toggle buttons).
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                Need to update subtotal of each section based on the selecting
                item prices.
              </li>
              <li>
                Subtotal should be update realtime if user unselect item,
                subtotal need to be reduce and if he select item it should be
                incease.
              </li>
            </ul>
          </li>
          <li>
            Check that the selected item numbers match the selected quantities.
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                When pressing the order now button, you need to check the
                selected item count in each section to match the quantity you
                defined in the top.
              </li>
              <li>
                If the user selects fewer items than defined in the top, give a
                warning message.
              </li>
            </ul>
          </li>
          <li>
            When you press submit, a popup with the final total appears, and
            when you click a button, a thank you message appears.
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                After completing all four issues, only you can complete this
                one.
              </li>
              <li>
                You should get the subtotal price of the gun prices and
                inventory and display the total price with a pay now button in a
                pop-up notification.
              </li>
              <li>
                When the user clicked the pay now button, a thank you message
                was given and the quantity and other selected items were reset.
              </li>
              <li>
                You can create a popup and thank-you message UI as you wish.
              </li>
            </ul>
          </li>
        </ol>
      </Container>
    </>
  );
};

export default Issues;
