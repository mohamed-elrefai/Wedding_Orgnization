import { Application } from 'express'
import { connect, ConnectOptions } from 'mongoose'

export default (app: Application) => {
    const port = process.env.PORT
    connect(
        process.env.DataBase_URL_Link as string,
        { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
    )
        .then(() => {
            app.listen(port, () => {
                console.log('listening on URL ' + process.env.API_URL)
            })
        })
        .catch((err) => console.log(err))
}
