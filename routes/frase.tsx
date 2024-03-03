import Axios from "npm:axios"
import {FreshContext, Handlers, PageProps} from "$fresh/server.ts"

export type Frase = {
    data: string;
}

export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown, Frase>) => {
        const response = await Axios.get<Frase>("https://filmquotes.deno.dev/")
        return ctx.render(response.data)
    }
}

const Page = (props: PageProps<Frase>) => {
    return (
        <body class={"img-fondo1"}>
            <div>
              <p class="texto-api">{props.data}</p>
              <a href={"/frase"}><button class="start-boton"></button></a>
              <a href={"/"}><img class="casa" src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img></a>
            </div>
        </body>
    )
}

export default Page