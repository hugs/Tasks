// ==========================================================================
// Project: Tasks 
// ==========================================================================
/*globals CoreTasks Tasks */

/** 

  Used as groupExampleView for assignee information display in the main workspace.
  
  @extends SC.ListItemView
  @author Suvajit Gupta
*/

Tasks.AssigneeItemView = SC.ListItemView.extend(
/** @scope Tasks.AssigneeItemView.prototype */ {
  
  render: function(context, firstTime) {
    sc_super();
    var content = this.get('content');
    if(content) {
      var loading = content.get('loading');
      if(loading === CoreTasks.USER_NOT_OR_UNDER_LOADED) context.addClass('assignee-not-or-under-loaded');
      else if(loading === CoreTasks.USER_PROPERLY_LOADED) context.addClass('assignee-properly-loaded');
      else if(loading === CoreTasks.USER_OVER_LOADED) context.addClass('assignee-over-loaded');
    }
  }
  
});