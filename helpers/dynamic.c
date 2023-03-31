void foo(int n, int m)
{
    int i, *p; /* allocate a block of n ints */
    if ((p = (int *)malloc(n * sizeof(int))) == NULL)
    {
        perror("malloc");
        exit(0);
    }
    for (i = 0; i < n; i++)
        p[i] = i;
    /* add m bytes to end of p block */
    if ((p = (int *)realloc(p, (n + m) * sizeof(int))) == NULL)
    {
        perror("realloc");
        exit(0);
    }
    for (i = n; i < n + m; i++)
        p[i] = i;
    /* print new array */
    for (i = 0; i < n + m; i++)
        printf("%d\n", p[i]);
    free(p); /* return p to available memory pool */
}
foo(4,7)