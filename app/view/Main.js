Ext.define('HRD.view.Main', {
	extend: 'Ext.tab.Panel',
    requires:[
        'HRD.view.Home',
        'HRD.view.Search',
        'HRD.view.Action',
        'HRD.view.Settings',
        'HRD.view.More'
    ],
	config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        defaults: {
            html: '',
            styleHtmlContent: true
        },
		items: [{
            xtype: 'homecard'
        },{
            xtype: 'searchcard' 
        },{
            xtype: 'actioncard'
        },{
            xtype: 'settingscard'
        }, {
            xtype: 'morecard'
        }]
	}
});