import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import bodyParser from 'body-parser';
import routes from './src/routes';

// SSR
import {renderToString} from 'react-dom/server';
import match from 'react-router/lib/match';
import RoutingContext from 'react-router/lib/RoutingContext';

// App bootstrap
let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "static")));

app.use((req, res)=>{
    let rootHtml = fs.readFileSync(path.join(__dirname, "index.html"), { encoding: 'utf8'});
    match({routes: routes, location: req.url}, (err, redirectLocation, renderProps)=>{
        if(err) return res.status(500).send(error);
        if(redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        if(renderProps){
            let rendered = renderToString(<RoutingContext {...renderProps} />);
            
            rootHtml = rootHtml.replace(new RegExp('{container}', 'g'), rendered);
            res.status(200).send(rootHtml);
        } else {
            res.status(404).send("Not found >_\"");
        }
    })
});

app.listen(process.env.PORT || 3000, (err)=>{
    console.log("Listening on port "+ (process.env.PORT || 3000));
})