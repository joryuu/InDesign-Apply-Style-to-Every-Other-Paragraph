var doc = app.activeDocument;

// Function to get all paragraph styles including those in groups
function getAllParagraphStyles(group, styles, groupName) {
    if (!group) {
        group = doc.paragraphStyleGroups;
        var rootStyles = doc.paragraphStyles.everyItem().getElements();
        for (var i = 0; i < rootStyles.length; i++) {
            styles.push({ 
                displayName: rootStyles[i].name, 
                style: rootStyles[i], 
                isGroup: false 
            });
        }
    }
    
    for (var i = 0; i < group.length; i++) {
        var currentGroup = group[i];
        var currentGroupName = groupName ? groupName + " > " + currentGroup.name : currentGroup.name;
        
        styles.push({ displayName: currentGroupName, isGroup: true });
        
        var groupStyles = currentGroup.paragraphStyles.everyItem().getElements();
        for (var j = 0; j < groupStyles.length; j++) {
            styles.push({ 
                displayName: "  " + groupStyles[j].name, 
                style: groupStyles[j], 
                isGroup: false 
            });
        }
        
        getAllParagraphStyles(currentGroup.paragraphStyleGroups, styles, currentGroupName);
    }
}

var paragraphStyles = [];
getAllParagraphStyles(null, paragraphStyles, "");

var styleNames = [];
for (var i = 0; i < paragraphStyles.length; i++) {
    styleNames.push(paragraphStyles[i].displayName);
}

var dialog = app.dialogs.add({ name: "Apply Paragraph Style to Every Other Paragraph" });
with (dialog.dialogColumns.add()) {
    var styleDropdown = dropdowns.add({
        stringList: styleNames,
        selectedIndex: 0
    });
    var skipCheckbox = checkboxControls.add({
        staticLabel: "Skip first paragraph",
        checkedState: false
    });
}

if (dialog.show() === true) {
    var selectedIndex = styleDropdown.selectedIndex;
    var skipFirst = skipCheckbox.checkedState;
    dialog.destroy();
} else {
    dialog.destroy();
    exit();
}

// Get the style object directly by index instead of matching by name
var paragraphStyle = null;
if (!paragraphStyles[selectedIndex].isGroup) {
    paragraphStyle = paragraphStyles[selectedIndex].style;
}

if (!paragraphStyle) {
    alert("Please select a valid paragraph style (not a folder).");
    exit();
}

var story = app.selection[0].parentStory;
var startIndex = skipFirst ? 1 : 0;
var step = 2;

for (var i = startIndex; i < story.paragraphs.length; i += step) {
    story.paragraphs[i].appliedParagraphStyle = paragraphStyle;
}

alert("Paragraph style applied to every other paragraph.");