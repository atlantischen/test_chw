import { createApp } from "vue"
import App from "./App.vue"

import "tailwindcss/tailwind.css"
import { setupStore } from "./store"

import { Search, Image as VanImage, Rate ,Skeleton,List} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(Search)
app.use(VanImage)
app.use(Rate)
app.use(Skeleton)
app.use(List)

setupStore(app)

app.mount("#app")