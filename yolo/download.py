from roboflow import Roboflow
rf = Roboflow(api_key="unauthorized")
project = rf.workspace("yolo-m3bzt").project("animals-shwba")
version = project.version(18)
dataset = version.download("yolov9")