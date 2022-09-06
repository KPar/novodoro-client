import { Provider } from 'react-redux'
import store from '../../store';

import { render, screen } from '@testing-library/react';
import TimerController from '../TimerController'; 
import userEvent from '@testing-library/user-event';
import { setTimerState } from '../../features/timerStateSlice'; 
import { act } from 'react-dom/test-utils';

describe("TimerController component", () => {

    type timerState = "inactive" | "active" | "paused" | "completed" | "break" | "completed break"
  
    const testTimerControllerButtonClick = (clickedButton: string, fromState: timerState, buttonsRendered: string[]) => {
      test(`from ${fromState} state, ${clickedButton.toUpperCase()} button click renders button(s): 
      ${buttonsRendered.map(x => x.toUpperCase()).join(", and ")}`, () => {
        render(
          <Provider store={store}>
            <TimerController />
          </Provider>
        )
        act(() => { store.dispatch(setTimerState(fromState)) });
  
        userEvent.click(screen.getByRole("button", { name: clickedButton.toUpperCase() }));
  
        for (let button of buttonsRendered) {
          expect(screen.getByRole("button", { name: button.toUpperCase() })).toBeInTheDocument();
        }
      });
    };
  
    testTimerControllerButtonClick("start", "inactive", ["exit", "pause"]);
  
    testTimerControllerButtonClick("exit", "active", ["start"]);
    testTimerControllerButtonClick("pause", "active", ["exit", "continue"]);
  
    testTimerControllerButtonClick("exit", "paused", ["start"]);
    testTimerControllerButtonClick("continue", "paused", ["exit", "pause"]);
  
    testTimerControllerButtonClick("start break", "completed", ["finish break", "exit"]);
    testTimerControllerButtonClick("skip", "completed", ["exit", "pause"]);
    testTimerControllerButtonClick("exit", "completed", ["start"]);
  
    testTimerControllerButtonClick("finish break", "break", ["start","exit"]);
    testTimerControllerButtonClick("exit", "break", ["start"]);
  
    testTimerControllerButtonClick("start", "completed break", ["exit","pause"]);
    testTimerControllerButtonClick("exit", "completed break", ["start"]);
  
  
  })
  
  
  