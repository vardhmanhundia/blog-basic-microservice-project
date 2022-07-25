# Mircoservice on Kubernetes

### Method 2: Updating the image used by a deployment

```bash
 kubectl rollout restar deployment <deploy-name>
```

## Networking in kubernetes

- _NOTE_: Every time we are thinking about we are using services

### Types of services:

1. Cluster IP: sets up an easy-to-remember URL to access a pod. Only exposes pods in the Cluster

2. Node Port: Makes a pod available from outside the cluster. Usually only used for dev purposes.

3. Load Balancer: Makes a pod available from outside the cluster. This is the right way to expose to the outside world.

4. External Name: Redirects an in-cluster request to CNAME url
