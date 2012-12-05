YUI_config = {
    groups : {
        sources : {
            base: "app/assets/javascript/src/",
            modules: {
                "foo-module": {
                    path: "foo-module.js"
                }
            }
        },
        specs: {
            base: "test/javascript/specs/",
            modules: {
                "foo-module-spec": {
                    path: "foo-module-spec.js",
                    requires: ['foo-module']
                }
            }
        }
    }
};