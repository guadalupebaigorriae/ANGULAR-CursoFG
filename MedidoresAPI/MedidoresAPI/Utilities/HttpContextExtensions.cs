﻿using Microsoft.EntityFrameworkCore;

namespace MedidoresAPI.Utilities
{
    public static class HttpContextExtensions
    {
        public async static Task InsertarParametrosPagCabecera<T>(this HttpContext httpContext,
            IQueryable<T> queryable)
        {
            if(httpContext is null)
            {
                throw new ArgumentNullException(nameof(httpContext));
            }

            double cantidad = await queryable.CountAsync();
            httpContext.Response.Headers.Append("cantidad-total-registros", cantidad.ToString());
        }
    }
}
