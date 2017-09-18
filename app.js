Ext.Loader.setPath({
    'Ext': 'touch/src'
});

Ext.application({
    name: 'HRD',
    requires: [
        'Ext.MessageBox'
    ],
    views: ['Main', 'Home', 'Contact'],
    launch: function() {
        //Ext.fly('appLoadingIndicator').destroy();
        
        Ext.Viewport.add(Ext.create('HRD.view.Main'));
    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});