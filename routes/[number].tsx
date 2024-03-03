import {FreshContext, Handlers, PageProps} from "$fresh/server.ts"
import Axios from "npm:axios"
import { Frase } from "./frase.tsx";

export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, Frase>) => {
        const {number} = ctx.params;    
        const response = await Axios.get<Frase>(`https://filmquotes.deno.dev/${number}`)
        return ctx.render(response.data)
    }
}

const Page = (props: PageProps<Frase>) => {
    return (
        <body class={"img-fondo1"}>
            <div>
                <p class="texto-api">{props.data}</p>
                <a href={"/"}><img class="casa" src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img></a>
            </div>
        </body>
    )
}
export default Page