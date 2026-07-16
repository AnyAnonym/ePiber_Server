# Allgemein
same as ePiber but this time without firebase functions or cloud functions just arch linux with caddy and node.js and the google spreadsheet as a DB




# Git-Befehle-Ablauf:

## 1. Status & Branch prüfen
git log <-- commit history
git status
git branch

## 2. Falls noch keine Dateien gestaged sind (man kann auch Ordner auswählen!)
git add -A <-- -A sagt alle Datein im Repo sollen genutzt werden

## 3. Ersten Commit erstellen (falls noch keiner existiert)
git commit -m "Beschreibung der Änderung"

## 4. Branch ggf. auf "main" umbenennen (falls er "master" heißt)
git branch -M main

## 5. Remote-Repository verknüpfen (falls noch nicht gemacht)
git remote -v
git remote add origin git@github.com:AnyAnonym/ePiber_Server.git

## 6. Änderungen vom Remote holen (falls dort schon Inhalte sind)
git pull origin main --allow-unrelated-histories

## 7. Konflikte lösen, falls nötig, dann:
git add .
git commit -m "Merge remote into local"

## 8. Jetzt pushen
git push -u origin main



