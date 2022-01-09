// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"div_tabela")
                .setLeft("18.285714285714285em")
                .setTop("14.476190476190476em")
                .setWidth("39.695238095238096em")
                .setHeight("22.933333333333334em")
            );
            
            host.div_tabela.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"tabela")
                .setLeft("0em")
                .setTop("0em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id" : "label",
                        "type" : "label",
                        "width" : "8em",
                        "caption" : "label"
                    },
                    {
                        "id" : "input",
                        "type" : "input",
                        "width" : "8em",
                        "caption" : "input"
                    },
                    {
                        "id" : "combobox",
                        "type" : "combobox",
                        "width" : "8em",
                        "caption" : "combobox"
                    },
                    {
                        "id" : "listbox",
                        "type" : "listbox",
                        "width" : "8em",
                        "caption" : "listbox"
                    },
                    {
                        "id" : "getter",
                        "type" : "getter",
                        "width" : "8em",
                        "caption" : "getter"
                    },
                    {
                        "id" : "cmdbox",
                        "type" : "cmdbox",
                        "width" : "8em",
                        "caption" : "cmdbox"
                    },
                    {
                        "id" : "popbox",
                        "type" : "popbox",
                        "width" : "8em",
                        "caption" : "popbox"
                    },
                    {
                        "id" : "date",
                        "type" : "date",
                        "width" : "8em",
                        "caption" : "date"
                    },
                    {
                        "id" : "time",
                        "type" : "time",
                        "width" : "8em",
                        "caption" : "time"
                    },
                    {
                        "id" : "datetime",
                        "type" : "datetime",
                        "width" : "8em",
                        "caption" : "datetime"
                    },
                    {
                        "id" : "color",
                        "type" : "color",
                        "width" : "8em",
                        "caption" : "color"
                    },
                    {
                        "id" : "spin",
                        "type" : "spin",
                        "width" : "8em",
                        "caption" : "spin"
                    },
                    {
                        "id" : "counter",
                        "type" : "counter",
                        "width" : "8em",
                        "caption" : "counter"
                    },
                    {
                        "id" : "currency",
                        "type" : "currency",
                        "width" : "8em",
                        "caption" : "currency"
                    },
                    {
                        "id" : "number",
                        "type" : "number",
                        "width" : "8em",
                        "caption" : "number"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : "label1"
                            },
                            {
                                "value" : "input1"
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : "2022-01-09 19:01:49"
                            },
                            {
                                "value" : "00:00"
                            },
                            {
                                "value" : "2022-01-09 19:01:49"
                            },
                            {
                                "value" : "#FFFFFF"
                            },
                            {
                                "value" : 12
                            },
                            {
                                "value" : 12
                            },
                            {
                                "value" : 23.44
                            },
                            {
                                "value" : 43.23
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "label2"
                            },
                            {
                                "value" : "input2"
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : "2022-01-09 19:01:49"
                            },
                            {
                                "value" : "02:00"
                            },
                            {
                                "value" : "2022-01-09 19:01:49"
                            },
                            {
                                "value" : "#F0F0F0"
                            },
                            {
                                "value" : 0.13
                            },
                            {
                                "value" : 0.13
                            },
                            {
                                "value" : 123
                            },
                            {
                                "value" : 56.32
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "label3"
                            },
                            {
                                "value" : "input3"
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : "2022-01-09 19:01:49"
                            },
                            {
                                "value" : "03:00"
                            },
                            {
                                "value" : "2022-01-09 19:01:49"
                            },
                            {
                                "value" : "#0F0F0F"
                            },
                            {
                                "value" : 0.14
                            },
                            {
                                "value" : 0.14
                            },
                            {
                                "value" : 233.55
                            },
                            {
                                "value" : 43.53
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"botoes")
                .setLeft("2.2857142857142856em")
                .setTop("0.7619047619047619em")
                .setWidth("32.076190476190476em")
                .setHeight("6.171428571428572em")
            );
            
            host.botoes.append(
                xui.create("xui.UI.Button")
                .setHost(host,"aceitar")
                .setLeft("1.5238095238095237em")
                .setTop("0.7619047619047619em")
                .setWidth("13.638095238095238em")
                .setCaption("Aceitar")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});