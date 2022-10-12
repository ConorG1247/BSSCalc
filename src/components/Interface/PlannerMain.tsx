import { useEffect, useState, createContext } from "react";
import Hive from "components/Planner/Hive/Hive";

export const PlannerThemeContext = createContext(true);

function PlannerMain() {
  const [bssDescriptionCheck, setBssDescriptionCheck] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("BSS-Theme") === "dark" ? true : false
  );

  const changeTheme = (selection: boolean) => {
    if (selection) {
      localStorage.setItem("BSS-Theme", "dark");
    } else {
      localStorage.setItem("BSS-Theme", "light");
    }
    setTheme((current) => !current);
  };

  useEffect(() => {
    if (!localStorage.getItem("BSS-Theme")) {
      console.log(true);
      localStorage.setItem("BSS-Theme", "light");
    }
  }, []);

  const descriptionCheck = () => {
    setBssDescriptionCheck(false);
  };

  return (
    <PlannerThemeContext.Provider value={theme}>
      <div
        className="main-parent-container"
        style={{
          backgroundColor: theme ? "rgb(29, 54, 62)" : "rgb(152, 203, 223)",
        }}
      >
        <div
          className={
            theme ? "main-container dark-background" : "main-container"
          }
        >
          <div className="main-title-container">
            <div className={theme ? "main-title dark-font" : "main-title"} />
            <div
              onClick={() => changeTheme(!theme)}
              className={theme ? "dark" : "light"}
            />
          </div>
          <div className={theme ? "main-subtitle dark-font" : "main-subtitle"}>
            A tool to help plan your future hive ideas.
          </div>
          <div
            className={theme ? "main-items-container" : "main-items-container"}
          >
            {bssDescriptionCheck && (
              <div
                className={
                  theme ? "main-description dark-info" : "main-description"
                }
              >
                To use the Hive Planner, select which rarity of bees you want
                and drag the icon into the{" "}
                <span style={{ fontWeight: "bold", color: "rgb(53, 151, 97)" }}>
                  hive.
                </span>{" "}
                After you're happy with your hive setup, you can save it for
                later. <br />
                (Hive data only saves on your current device and gets deleted if
                you clear browser cache.)
              </div>
            )}
            <Hive descriptionCheck={descriptionCheck} />
          </div>
        </div>
      </div>
    </PlannerThemeContext.Provider>
  );
}

export default PlannerMain;
