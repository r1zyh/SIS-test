import { Box } from "@mui/material";
import { Footer } from "../../footer/ui/footer";
import { Header } from "../../header/ui";
import { Main } from "../../main";

export function App() {
  return (
    <div>
      <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <Main />
      <Footer />
      </Box>
    </div>
  );
}