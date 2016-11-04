'use strict';
export default {
    server: {},
    connections: [
        {
            port: 8080,
            labels: ["api"]
        }
    ],
    registrations: [
        // {
        //     plugin: "./user",
        //     options: {
        //         select: ["api"],
        //         routes: {
        //         	prefix: "/user"
        //         }
        //     }
        // }
    ]
};