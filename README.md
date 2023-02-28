# SkillTaxonomyPoC_v2
This PoC demonstrates the functionality of implementing a hierarchical taxonomy for the skills in Connect.

## Description
The skill taxonomy is a tree of Skill and SkillCategory nodes rooted at the singular Taxonomy node.
Skills are the only nodes that can be rated and can exist within the Taxonomy tree or as free-floating nodes. All Skill nodes within the Taxonomy tree must be leaf nodes.
SkillCategories are used to categorize Skill nodes and other SkillCategories. SkillCategories can not be rated, but we may add the ability to declare yourself as a Subject Matter Expert for a SkillCategory.

Because Skill nodes can be free-floating, deleting a SkillCategory will not delete its child Skill nodes but will instead detach them from the Taxonomy tree. These free-floating Skill nodes can be seen in the Unattached Skills modal in the top left. These free-floating skills can then be attached to a SkillCategory to reintroduce them to the Taxonomy tree.

The purpose of defining our Taxonomy as a tree-like structure is to allow us to make informed decisions about the relationships between Skills. For now, we have a basic Related Skills modal that displays any Skills "related to" a chosen Skill. Right now we define related Skills as any Skills that are direct or indirect children of the chosen Skill's parent node. However, we have plans to implement more complex algorithms for determining relationships between Skills.

## Local Setup
First, follow the instructions in the `/backend` folder to launch the backend. Once the backend is running, follow the instructions in `/frontend` to run the frontend.
