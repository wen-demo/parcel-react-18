import { createRoot } from 'react-dom/client';
import App from "./pages/app";

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App tab="home" />);