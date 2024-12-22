kubectl delete deployment .
kubectl apply -f .
kubectl port-forward svc/backend 8081:8081 &
kubectl port-forward svc/frontend 5173:5173 &
kubectl port-forward svc/db 5432:5432