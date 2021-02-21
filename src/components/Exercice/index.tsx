import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Footer from "@components/Footer";
import { ConsoleMessage } from "src/types";

const Editor = dynamic(() => import("@components/Editor"), { ssr: false });

interface ExerciceProps {
  exo: {
    placeholder: string;
    functionName: string;
    testValues: {
      value: boolean | string | number | any[];
      expectedResult: boolean | string | number;
    }[];
  };
  onStopTimer: () => void;
  onGoToNext: () => void;
}

const Exercice: React.FC<ExerciceProps> = ({
  exo: { placeholder, functionName, testValues },
  onStopTimer,
  onGoToNext,
}) => {
  const [anwser, setAnwser] = useState(placeholder);
  const [consoleMessages, setConsoleMessage] = useState<ConsoleMessage[]>([]);
  const [isSuccessfull, setIsSuccessfull] = useState(false);

  const addConsoleMessage = useCallback((message: ConsoleMessage) => {
    setConsoleMessage((allMessages) => [...allMessages, message]);
  }, []);

  useEffect(() => {
    if (isSuccessfull) {
      onStopTimer();
      addConsoleMessage({
        type: "success",
        value: `SUCCESS! All tests passed. Well done!
        Click Go to move to the next level!`,
      });
    }
  }, [isSuccessfull]);

  const onValidate = useCallback(() => {
    if (isSuccessfull) {
      onGoToNext();
      return;
    }

    let hasError = false;

    try {
      testValues.forEach(({ value, expectedResult }) => {
        addConsoleMessage({
          type: "info",
          value: `Testing "${JSON.stringify(value)}"...`,
        });

        const result = eval(
          `${anwser} ${functionName}(${JSON.stringify(value)})`
        );

        if (expectedResult === result) {
          addConsoleMessage({
            type: "success",
            value: `Yep, the result is ${expectedResult}`,
          });
          return;
        }

        hasError = true;

        return addConsoleMessage({
          type: "error",
          value: `Expected ${expectedResult}, but got ${result}`,
        });
      });

      if (!hasError) {
        setIsSuccessfull(true);
      }
    } catch (error) {
      addConsoleMessage({
        type: "error",
        value: `error: ${error}`,
      });
    }
  }, [anwser, isSuccessfull]);

  return (
    <div>
      <Editor onChange={setAnwser} value={anwser} />
      <Footer onGo={onValidate} consoleValues={consoleMessages} />
    </div>
  );
};

export default Exercice;
