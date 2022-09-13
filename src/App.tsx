import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { TaskTable } from "./components/TaskTable";
import { TaskContextProvider } from "./contexts/TaskContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TaskContextProvider>
      <Header/>
      <TaskTable/>
      </TaskContextProvider>
    </ThemeProvider>
  )
}
