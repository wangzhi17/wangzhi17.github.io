(this["webpackJsonphdl-web-client"] = this["webpackJsonphdl-web-client"] || []).push([[0], {
    13: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(1), o = n(2), a = n(4), c = n(3), l = n(5), i = n(0), s = n.n(i), u = n(7), f = n.n(u);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        var m = function (e) {
            function t(e) {
                return Object(r.a)(this, t), Object(a.a)(this, Object(c.a)(t).call(this, e))
            }

            return Object(l.a)(t, e), Object(o.a)(t, [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "componentWillUnmount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.tableInfo, n = e.controllerMode;
                    return s.a.createElement("div", {style: p.tableInfo}, s.a.createElement("text", {style: p.tableInfoText}, "\u9910\u684c\u53f7\uff1a", t.tableName), s.a.createElement("text", {style: p.tableInfoText}, "\u70b9\u706b\u72b6\u6001\uff1a", "0" === t.fireStatus ? "\u5173\u95ed" : "\u5f00\u542f"), s.a.createElement("text", {style: p.tableInfoText}, "\u8bbe\u7f6e\u89d2\u5ea6\uff1a", t.setOpenPercent), s.a.createElement("text", {style: p.tableInfoText}, "\u5f53\u524d\u89d2\u5ea6\uff1a", t.currentOpenPercent), s.a.createElement("text", {style: p.tableInfoText}, "\u6a21\u5f0f\uff1a", n))
                }
            }]), t
        }(s.a.Component), p = {
            tableInfo: {marginRight: 20, display: "flex", flexDirection: "column"},
            tableInfoText: {fontSize: 24, fontWeight: "bold", color: "black"}
        }, d = function (e) {
            function t(e) {
                return Object(r.a)(this, t), Object(a.a)(this, Object(c.a)(t).call(this, e))
            }

            return Object(l.a)(t, e), Object(o.a)(t, [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "componentWillUnmount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.inverterInfo, n = e.inverterMode;
                    return s.a.createElement("div", {style: b.inverterInfo}, s.a.createElement("text", {style: b.inverterInfoText}, "\u53d8\u9891\u5668\uff1a", t.inverterName), s.a.createElement("text", {style: b.inverterInfoText}, "\u8bbe\u7f6e\u9891\u7387\uff1a", t.setFrequency), s.a.createElement("text", {style: b.inverterInfoText}, "\u5f53\u524d\u9891\u7387\uff1a", t.currentFrequency), s.a.createElement("text", {style: b.inverterInfoText}, "\u6a21\u5f0f\uff1a", n))
                }
            }]), t
        }(s.a.Component), b = {
            inverterInfo: {marginRight: 20, display: "flex", flexDirection: "column"},
            inverterInfoText: {fontSize: 24, fontWeight: "bold", color: "black"}
        }, v = function (e) {
            function t(e) {
                var n;
                Object(r.a)(this, t), (n = Object(a.a)(this, Object(c.a)(t).call(this, e))).selectGroupName = function (e) {
                    n.setState({selectedGroupName: e})
                }, n.modeConversion = function (e) {
                    var t = "";
                    switch (e) {
                        case"0":
                            t = "\u81ea\u52a8\u6a21\u5f0f";
                            break;
                        case"1":
                            t = "\u79bb\u7ebf\u6a21\u5f0f";
                            break;
                        case"2":
                            t = "\u547d\u4ee4\u6a21\u5f0f"
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
                                setFrequency: "40Hz",
                                currentFrequency: "40Hz",
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
                                setFrequency: "30Hz",
                                currentFrequency: "30Hz",
                                inverterMode: "0"
                            }
                        }]
                    }
                });
                return n.state = {socketMessage: JSON.parse(o), selectedGroupName: ""}, n
            }

            return Object(l.a)(t, e), Object(o.a)(t, [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "componentWillUnmount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    return s.a.createElement("div", {style: O.content}, s.a.createElement("h1", null, "\u4ee3\u7801\uff1a", this.state.socketMessage.code), s.a.createElement("h1", null, "\u95e8\u5e97\u4ee3\u7801\uff1a", this.state.socketMessage.data.storeInfo.storeID), s.a.createElement("div", {style: O.allGroupButton}, this.state.socketMessage.data.group.map((function (t, n) {
                        var r = t.groupName;
                        return s.a.createElement("div", {key: n}, s.a.createElement("button", {
                            style: e.state.selectedGroupName === r ? O.groupButtonActive : O.groupButtonNormal,
                            onClick: function () {
                                return e.selectGroupName(r)
                            }
                        }, r))
                    }))), this.state.socketMessage.data.group.map((function (t, n) {
                        if (t.groupName === e.state.selectedGroupName) {
                            var r = t.tableInfo, o = t.inverter;
                            return s.a.createElement("div", {key: n, style: O.allDevice}, r.map((function (t, n) {
                                return s.a.createElement(m, {
                                    key: n,
                                    tableInfo: t,
                                    controllerMode: e.modeConversion(t.controllerMode)
                                })
                            })), s.a.createElement(d, {
                                inverterInfo: o,
                                inverterMode: e.modeConversion(o.inverterMode)
                            }))
                        }
                    })))
                }
            }]), t
        }(s.a.Component), O = {
            content: {display: "flex", flexDirection: "column", flex: 1},
            allGroupButton: {display: "flex", flexDirection: "row"},
            allDevice: {display: "flex", flexDirection: "row", flexWrap: "wrap"},
            groupButtonActive: {fontSize: 28, color: "red", marginRight: 10},
            groupButtonNormal: {fontSize: 28, color: "black", marginRight: 10}
        };
        f.a.render(s.a.createElement(v, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
            e.unregister()
        }))
    }, 8: function (e, t, n) {
        e.exports = n(13)
    }
}, [[8, 1, 2]]]);
//# sourceMappingURL=main.70bd88fb.chunk.js.map