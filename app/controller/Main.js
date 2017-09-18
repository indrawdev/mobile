Ext.define('HRD.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            starButton: 'button[action=pingHomeBadge]'
        },
        control: {
            starButton: {
                tap: 'incrementHomeBadge'
            }
        }
    }
});