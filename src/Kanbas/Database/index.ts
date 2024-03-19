import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";

const db = {
  courses,
  modules,
  assignments
};

export { db as default, courses, modules, assignments };
