/** Add your relevant code here for the issue to reproduce */

const IS_MOBILE_SITE = true;
export const config = {
  unstable_runtimeJS: !IS_MOBILE_SITE,
};

export default function Home() {
  return (
    <div>
      When running this page, it will output a warning in the console that it
      cannot recognize the config for the page
      <div>
        Clicking this button should not show an alert box as JS should not be
        enabled
      </div>
      <div>
        <button
          onClick={() => {
            alert("You should not see this");
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}
