define("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/services/htmlSymbolsProvider",function(e,t){"use strict";function n(e,t){var n=[];return t.roots.forEach(function(t){o(e,t,"",n)}),n}function o(e,t,n,r){var s=a(t),c=i.Location.create(e.uri,i.Range.create(e.positionAt(t.start),e.positionAt(t.end))),u={name:s,location:c,containerName:n,kind:i.SymbolKind.Field};r.push(u),t.children.forEach(function(t){o(e,t,s,r)})}function a(e){var t=e.tag;if(e.attributes){var n=e.attributes.id,o=e.attributes["class"];n&&(t+="#"+n.replace(/[\"\']/g,"")),o&&(t+=o.replace(/[\"\']/g,"").split(/\s+/).map(function(e){return"."+e}).join(""))}return t||"?"}Object.defineProperty(t,"__esModule",{value:!0});var i=e("node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main");t.findDocumentSymbols=n});