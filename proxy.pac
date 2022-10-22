function FindProxyForURL(url, host) { 
// If the requested website is hosted within the internal network, send direct. 
    if (isPlainHostName(host) || 
        shExpMatch(host, "*.local") || 
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") || 
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") || 
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") || 
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")) 
        return "DIRECT";

    if (isPlainHostName(host) || 
        shExpMatch(host, "*.blombank.com") 
        return "DIRECT";

    if (isPlainHostName(host) || 
        shExpMatch(host, "*.samaflix.com") 
        return "DIRECT";

// DEFAULT RULE: All other traffic, use below proxies, in fail-over order. 
    return "PROXY 192.168.1.208:8080"; }