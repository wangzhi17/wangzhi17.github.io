(this["webpackJsonphdl-web-client"] = this["webpackJsonphdl-web-client"] || []).push([[0], {
    13: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(1), o = n(2), a = n(4), l = n(3), c = n(5), i = n(0), u = n.n(i), s = n(7), f = n.n(s);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        var d = function (e) {
            function t(e) {
                return Object(r.a)(this, t), Object(a.a)(this, Object(l.a)(t).call(this, e))
            }

            return Object(c.a)(t, e), Object(o.a)(t, [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "componentWillUnmount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.tableInfo, n = e.controllerMode;
                    return u.a.createElement("div", null, u.a.createElement("div", {style: m.content}, u.a.createElement("text", {style: m.tableName}, t.tableName), u.a.createElement("div", {style: "0" === t.fireStatus ? m.tableInfoOutsideNormal : m.tableInfoOutsideActive}, u.a.createElement("div", {style: m.tableInfoInner}, u.a.createElement("text", {style: m.tableInfoCurrentText}, "\u5f53\u524d"), u.a.createElement("text", {style: m.tableInfoCurrentOpenPercent}, t.currentOpenPercent), u.a.createElement("text", {style: m.tableInfoSetOpenPercent}, "0" === t.fireStatus ? " " : t.setOpenPercent), u.a.createElement("text", {style: m.tableInfoText}, n)))))
                }
            }]), t
        }(u.a.Component), m = {
            content: {
                display: "flex",
                flex: 1,
                width: "100%",
                height: "100%",
                alignItems: "center",
                flexDirection: "column",
                margin: 2.5
            },
            tableInfoInner: {
                display: "flex",
                flexDirection: "column",
                width: 160,
                height: 160,
                borderRadius: 80,
                border: 1,
                backgroundColor: "#282c34"
            },
            tableInfoOutsideNormal: {
                display: "flex",
                flexDirection: "column",
                width: 220,
                height: 220,
                borderRadius: 110,
                border: 1,
                backgroundColor: "#000000",
                alignItems: "center",
                justifyContent: "center",
                opacity: .8
            },
            tableInfoOutsideActive: {
                display: "flex",
                flexDirection: "column",
                width: 220,
                height: 220,
                borderRadius: 110,
                alignItems: "center",
                justifyContent: "center",
                border: 1,
                backgroundColor: "orange",
                opacity: .8
            },
            tableInfoCurrentText: {fontSize: 16, fontWeight: "bold", color: "white", textAlign: "center"},
            tableInfoSetOpenPercent: {fontSize: 24, fontWeight: "bold", color: "orange", textAlign: "center"},
            tableInfoCurrentOpenPercent: {fontSize: 56, fontWeight: "bold", color: "white", textAlign: "center"},
            tableName: {fontSize: 24, fontWeight: "bold", color: "black", textAlign: "center"},
            tableInfoText: {fontSize: 24, fontWeight: "bold", color: "white", textAlign: "center"}
        }, p = function (e) {
            function t(e) {
                return Object(r.a)(this, t), Object(a.a)(this, Object(l.a)(t).call(this, e))
            }

            return Object(c.a)(t, e), Object(o.a)(t, [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "componentWillUnmount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.inverterInfo, n = e.inverterMode;
                    return u.a.createElement("div", null, u.a.createElement("div", {style: b.content}, u.a.createElement("text", {style: b.inverterName}, t.inverterName), u.a.createElement("div", {style: "0" === t.currentFrequency ? b.inverterInfoOutsideNormal : b.inverterInfoOutsideActive}, u.a.createElement("div", {style: b.inverterInfoInner}, u.a.createElement("text", {style: b.inverterInfoCurrentText}, "\u5f53\u524d"), u.a.createElement("text", {style: b.inverterInfoCurrentFrequency}, t.currentFrequency), u.a.createElement("text", {style: b.inverterInfoSetFrequency}, "0" === t.currentFrequency ? " " : t.setFrequency), u.a.createElement("text", {style: b.inverterInfoText}, n)))))
                }
            }]), t
        }(u.a.Component), b = {
            content: {
                display: "flex",
                flex: 1,
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                margin: 2.5
            },
            inverterInfoInner: {
                display: "flex",
                flexDirection: "column",
                width: 160,
                height: 160,
                borderRadius: 80,
                border: 1,
                backgroundColor: "#282c34"
            },
            inverterInfoOutsideNormal: {
                display: "flex",
                flexDirection: "column",
                width: 220,
                height: 220,
                borderRadius: 110,
                border: 1,
                backgroundColor: "#000000",
                alignItems: "center",
                justifyContent: "center",
                opacity: .8
            },
            inverterInfoOutsideActive: {
                display: "flex",
                flexDirection: "column",
                width: 220,
                height: 220,
                borderRadius: 110,
                alignItems: "center",
                justifyContent: "center",
                border: 1,
                backgroundColor: "orange",
                opacity: .8
            },
            inverterInfoCurrentText: {fontSize: 16, fontWeight: "bold", color: "white", textAlign: "center"},
            inverterInfoSetFrequency: {fontSize: 24, fontWeight: "bold", color: "orange", textAlign: "center"},
            inverterInfoCurrentFrequency: {fontSize: 56, fontWeight: "bold", color: "white", textAlign: "center"},
            inverterName: {fontSize: 24, fontWeight: "bold", color: "black", textAlign: "center"},
            inverterInfoText: {fontSize: 24, fontWeight: "bold", color: "white", textAlign: "center"}
        }, v = function (e) {
            function t(e) {
                var n;
                Object(r.a)(this, t), (n = Object(a.a)(this, Object(l.a)(t).call(this, e))).selectGroupName = function (e) {
                    n.setState({selectedGroupName: e})
                }, n.modeConversion = function (e) {
                    var t = "";
                    switch (e) {
                        case"0":
                            t = "\u81ea\u52a8";
                            break;
                        case"1":
                            t = "\u79bb\u7ebf";
                            break;
                        case"2":
                            t = "\u547d\u4ee4"
                    }
                    return t
                };
                var o = JSON.stringify({
                    code: "0000", data: {
                        storeInfo: {storeID: "86-10-35"},
                        group: [{
                            groupName: "#1\u5730\u6392\u98ce",
                            tableInfo: [{
                                tableName: "001",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                airValve: "75%",
                                controllerMode: "0"
                            }, {
                                tableName: "002",
                                fireStatus: "0",
                                setOpenPercent: "0",
                                currentOpenPercent: "0",
                                controllerMode: "0"
                            }],
                            inverter: {
                                inverterName: "#1\u53d8\u9891\u5668",
                                setFrequency: "0",
                                currentFrequency: "0",
                                inverterMode: "0"
                            }
                        }, {
                            groupName: "#2\u5730\u6392\u98ce",
                            tableInfo: [{
                                tableName: "003",
                                fireStatus: "0",
                                setOpenPercent: "0",
                                currentOpenPercent: "0",
                                controllerMode: "0"
                            }, {
                                tableName: "005",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "006",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "008",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "009",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "010",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "011",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "012",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "013",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "015",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "016",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "018",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "019",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }, {
                                tableName: "020",
                                fireStatus: "1",
                                setOpenPercent: "76",
                                currentOpenPercent: "76",
                                controllerMode: "0"
                            }],
                            inverter: {
                                inverterName: "#2\u53d8\u9891\u5668",
                                setFrequency: "30",
                                currentFrequency: "30",
                                inverterMode: "0"
                            }
                        }]
                    }
                });
                return n.state = {socketMessage: JSON.parse(o), selectedGroupName: ""}, n
            }

            return Object(c.a)(t, e), Object(o.a)(t, [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "componentWillUnmount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    return u.a.createElement("div", {style: h.content}, u.a.createElement("h1", null, "\u4ee3\u7801\uff1a", this.state.socketMessage.code), u.a.createElement("h1", null, "\u95e8\u5e97\u4ee3\u7801\uff1a", this.state.socketMessage.data.storeInfo.storeID), u.a.createElement("div", {style: h.allGroupButton}, this.state.socketMessage.data.group.map((function (t, n) {
                        var r = t.groupName;
                        return u.a.createElement("div", {key: n}, u.a.createElement("button", {
                            style: e.state.selectedGroupName === r ? h.groupButtonActive : h.groupButtonNormal,
                            onClick: function () {
                                return e.selectGroupName(r)
                            }
                        }, r))
                    }))), this.state.socketMessage.data.group.map((function (t, n) {
                        if (t.groupName === e.state.selectedGroupName) {
                            var r = t.tableInfo, o = t.inverter;
                            return u.a.createElement("div", {key: n, style: h.allDevice}, r.map((function (t, n) {
                                return u.a.createElement(d, {
                                    key: n,
                                    tableInfo: t,
                                    controllerMode: e.modeConversion(t.controllerMode)
                                })
                            })), u.a.createElement(p, {
                                inverterInfo: o,
                                inverterMode: e.modeConversion(o.inverterMode)
                            }))
                        }
                    })))
                }
            }]), t
        }(u.a.Component), h = {
            content: {display: "flex", flexDirection: "column", flex: 1},
            allGroupButton: {display: "flex", flexDirection: "row"},
            allDevice: {display: "flex", flexDirection: "row", flexWrap: "wrap"},
            groupButtonActive: {fontSize: 24, color: "red", marginRight: 10},
            groupButtonNormal: {fontSize: 24, color: "black", marginRight: 10}
        };
        f.a.render(u.a.createElement(v, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
            e.unregister()
        }))
    }, 8: function (e, t, n) {
        e.exports = n(13)
    }
}, [[8, 1, 2]]]);
//# sourceMappingURL=main.09f6657f.chunk.js.map