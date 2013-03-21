module.exports =
    ## Put your general Website information here!
    templateData:
        site:
            title: "Open Device Labs Germany"
            twitter: "odl_hh"
            facebook: "https://www.facebook.com/OpenDeviceLabHamburg"
            email: "hello@example.com"
            phone: "1234 5678"

    ## Helpers for the handlebars templating engine
    plugins:
        handlebars:
            helpers:
                getBlock: (type, prefix, additional...) ->
                    additional.pop()
                    newPaths = (prefix+path for path in additional)
                    @getBlock(type).add(newPaths).toHTML()

                lowercase: (string) ->
                    string.toLowerCase()

                safeurl: (url) ->
                    encodeURI(url)