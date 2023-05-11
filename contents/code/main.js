// KWin script to switch to the last used desktop
var lastDesktop = 1;


/* Listen for switch desktop signal */
workspace.currentDesktopChanged.connect(function(desktop) {
  lastDesktop = desktop;
});

/**
 * switch to last used desktop
 */
function switchDesktop() {
  workspace.currentDesktop = lastDesktop;
  return;
}

function switchDesktopX(x) {
    if (workspace.currentDesktop == x) {
        workspace.currentDesktop = lastDesktop;
    } else {
        workspace.currentDesktop = x;
    }
    return;
}

/* Register shortcut */
registerShortcut('Switch to last used desktop', "", "", function() { switchDesktop(); });
for (let i = 1; i <= 9; i++) {
    registerShortcut('Switch to last used desktopx ' + i,
                     "", "", function() { switchDesktopX(i); });
}
