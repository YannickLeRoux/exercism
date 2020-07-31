module HelloWorld where

import Effect.Console

helloWorld :: Effect.Console Unit
helloWorld = log "Hello, World!"